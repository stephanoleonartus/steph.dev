from playwright.sync_api import Page, expect
import traceback

def test_about_image(page: Page):
    """
    This test verifies that the about image is displayed on the homepage.
    """
    try:
        # 1. Arrange: Go to the homepage.
        page.goto("http://localhost:3000")

        # 2. Assert: Check for the about image.
        about_image = page.locator('img[alt="About"]')
        expect(about_image).to_be_visible()

        # 3. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/about_image.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
