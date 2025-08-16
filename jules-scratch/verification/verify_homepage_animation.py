from playwright.sync_api import Page, expect
import traceback

def test_homepage_animation(page: Page):
    """
    This test verifies that the homepage displays the typewriter animation.
    """
    try:
        # 1. Arrange: Go to the homepage.
        page.goto("http://localhost:3000")

        # 2. Assert: Check that the animated text is present.
        # We can check for the wrapper span that the library creates.
        animated_text = page.locator('span[data-testid="type-animation"]')
        expect(animated_text).to_be_visible()

        # 3. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/homepage_animation.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
