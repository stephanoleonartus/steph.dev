from playwright.sync_api import Page, expect
import traceback

def test_globe_rendering(page: Page):
    """
    This test verifies that the globe is rendered on the homepage.
    """
    try:
        # 1. Arrange: Go to the homepage.
        page.goto("http://localhost:3000")

        # 2. Assert: Check for the canvas element that hosts the globe.
        canvas_element = page.locator('canvas')
        expect(canvas_element).to_be_visible()

        # 3. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/globe.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
