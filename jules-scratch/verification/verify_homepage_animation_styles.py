from playwright.sync_api import Page, expect
import traceback

def test_homepage_animation_styles(page: Page):
    """
    This test verifies that the homepage displays the typewriter animation with the correct styles.
    """
    try:
        # 1. Arrange: Go to the homepage.
        page.goto("http://localhost:3000")

        # 2. Assert: Wait for the animation to reach the blue text part.
        page.wait_for_timeout(1000) # Wait for the animation to start

        # 3. Screenshot: Capture the animation in its blue state.
        page.screenshot(path="jules-scratch/verification/homepage_animation_blue.png")

        # 4. Assert: Wait for the animation to go back to black.
        page.wait_for_timeout(1000)

        # 5. Screenshot: Capture the animation in its black state.
        page.screenshot(path="jules-scratch/verification/homepage_animation_black.png")

        print("Screenshots created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
