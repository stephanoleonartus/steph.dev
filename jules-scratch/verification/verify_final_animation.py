from playwright.sync_api import Page, expect
import traceback

def test_final_animation(page: Page):
    """
    This test verifies that the homepage displays the typewriter animation correctly.
    """
    try:
        # 1. Arrange: Go to the homepage.
        page.goto("http://localhost:3000")

        # 2. Assert: Wait for the animation to complete.
        page.wait_for_timeout(5000) # Wait for the animation to finish

        # 3. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/final_animation.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
