package com.reactnativekeyboardcontroller.views

import android.annotation.SuppressLint
import android.util.Log
import androidx.appcompat.widget.FitWindowsLinearLayout
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsAnimationCompat
import androidx.core.view.WindowInsetsCompat
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.views.view.ReactViewGroup
import com.reactnativekeyboardcontroller.KeyboardAnimationCallback
import com.reactnativekeyboardcontroller.R
import com.reactnativekeyboardcontroller.extensions.removeSelf
import com.reactnativekeyboardcontroller.extensions.requestApplyInsetsWhenAttached

private val TAG = EdgeToEdgeReactViewGroup::class.qualifiedName

@SuppressLint("ViewConstructor")
class EdgeToEdgeReactViewGroup(private val reactContext: ThemedReactContext) : ReactViewGroup(reactContext) {
  private var isStatusBarTranslucent = false
  private var isNavigationBarTranslucent = false
  private var eventView: ReactViewGroup? = null

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()

    reactContext.currentActivity?.let {
      WindowCompat.setDecorFitsSystemWindows(
        it.window,
        false,
      )
    }

    val activity = reactContext.currentActivity

    if (activity == null) {
      Log.w(TAG, "Can not setup keyboard animation listener, since `currentActivity` is null")
      return
    }

    eventView = ReactViewGroup(context)
    val root =
      activity.window.decorView.rootView.findViewById<FitWindowsLinearLayout>(
        R.id.action_bar_root,
      )
    root.addView(eventView)

    val callback = KeyboardAnimationCallback(
      view = this,
      persistentInsetTypes = WindowInsetsCompat.Type.systemBars(),
      deferredInsetTypes = WindowInsetsCompat.Type.ime(),
      // We explicitly allow dispatch to continue down to binding.messageHolder's
      // child views, so that step 2.5 below receives the call
      dispatchMode = WindowInsetsAnimationCompat.Callback.DISPATCH_MODE_CONTINUE_ON_SUBTREE,
      context = reactContext,
      onApplyWindowInsetsListener = { _, insets ->
        val content =
          reactContext.currentActivity?.window?.decorView?.rootView?.findViewById<FitWindowsLinearLayout>(
            R.id.action_bar_root,
          )
        content?.setPadding(
          0,
          if (this.isStatusBarTranslucent) 0 else insets?.getInsets(WindowInsetsCompat.Type.systemBars())?.top ?: 0,
          0,
          if (this.isNavigationBarTranslucent) 0 else insets?.getInsets(WindowInsetsCompat.Type.navigationBars())?.bottom ?: 0,
        )

        insets
      },
    )

    eventView?.let {
      ViewCompat.setWindowInsetsAnimationCallback(it, callback)
      ViewCompat.setOnApplyWindowInsetsListener(it, callback)
      it.requestApplyInsetsWhenAttached()
    }
  }

  override fun onDetachedFromWindow() {
    super.onDetachedFromWindow()

    eventView.removeSelf()
  }

  fun setStatusBarTranslucent(isStatusBarTranslucent: Boolean) {
    this.isStatusBarTranslucent = isStatusBarTranslucent
  }

  fun setNavigationBarTranslucent(isNavigationBarTranslucent: Boolean) {
    this.isNavigationBarTranslucent = isNavigationBarTranslucent
  }
}
