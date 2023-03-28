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
import com.reactnativekeyboardcontroller.extensions.requestApplyInsetsWhenAttached
import com.reactnativekeyboardcontroller.managers.KeyboardControllerViewManagerImpl

@SuppressLint("ViewConstructor")
class EdgeToEdgeReactViewGroup(private val reactContext: ThemedReactContext) : ReactViewGroup(reactContext) {
  private val TAG = KeyboardControllerViewManagerImpl::class.qualifiedName
  // class members
  private var isStatusBarTranslucent = false
  private var isNavigationBarTranslucent = false
  // temp solution
  private var hasChangedPaddings = false

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()

    val activity = reactContext.currentActivity

    if (activity == null) {
      Log.w(TAG, "Can not setup keyboard animation listener, since `currentActivity` is null")
      return
    }

    WindowCompat.setDecorFitsSystemWindows(
      activity.window,
      false,
    )

    val callback = KeyboardAnimationCallback(
      view = this,
      persistentInsetTypes = WindowInsetsCompat.Type.systemBars(),
      deferredInsetTypes = WindowInsetsCompat.Type.ime(),
      // We explicitly allow dispatch to continue down to binding.messageHolder's
      // child views, so that step 2.5 below receives the call
      dispatchMode = WindowInsetsAnimationCompat.Callback.DISPATCH_MODE_CONTINUE_ON_SUBTREE,
      context = reactContext,
      onApplyWindowInsetsListener = { v, insets ->
        val content =
          activity.window?.decorView?.rootView?.findViewById<FitWindowsLinearLayout>(
            R.id.action_bar_root,
          )
        val top = if (this.isStatusBarTranslucent) 0 else insets?.getInsets(WindowInsetsCompat.Type.systemBars())?.top ?: 0
        val bottom = if (this.isNavigationBarTranslucent) 0 else insets?.getInsets(WindowInsetsCompat.Type.navigationBars())?.bottom ?: 0

        // TODO: write why it's needed
        if (!hasChangedPaddings) {
          hasChangedPaddings = true
          println("CHANGE INSETS")
          content?.setPadding(
            0,
            top,
            0,
            bottom,
          )
        }
        println("LAID OUT2: ${v.isLaidOut()}")

        insets
      },
    )
    ViewCompat.setWindowInsetsAnimationCallback(this, callback)
    ViewCompat.setOnApplyWindowInsetsListener(this, callback)
    this.requestApplyInsetsWhenAttached() // TODO: or simply `requestApplyInsets?`
  }

  override fun onDetachedFromWindow() {
    super.onDetachedFromWindow()

    // TODO: write why we need to `nullish` callbacks here
    ViewCompat.setWindowInsetsAnimationCallback(this, null)
    ViewCompat.setOnApplyWindowInsetsListener(this, null)
  }

  fun setStatusBarTranslucent(isStatusBarTranslucent: Boolean) {
    this.isStatusBarTranslucent = isStatusBarTranslucent
  }

  fun setNavigationBarTranslucent(isNavigationBarTranslucent: Boolean) {
    this.isNavigationBarTranslucent = isNavigationBarTranslucent
  }
}
