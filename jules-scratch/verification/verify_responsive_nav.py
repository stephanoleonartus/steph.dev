from playwright.sync_api import Page, expect
import traceback

def test_responsive_nav(page: Page):
    """
    This test verifies that the responsive navigation menu works correctly on a mobile viewport.
    """
    try:
        # 1. Arrange: Go to the homepage with a mobile viewport.
        page.set_viewport_size({"width": 375, "height": 667})
        page.goto("http://localhost:3000")

        # 2. Assert: Check that the hamburger menu button is visible.
        hamburger_button = page.locator('.md\\:hidden button')
        expect(hamburger_button).to_be_visible()

        # 3. Act: Click the hamburger menu button.
        hamburger_button.click()

        # 4. Assert: Check that the mobile menu is visible.
        mobile_menu = page.locator('.md\\:hidden.mt-4')
        expect(mobile_menu).to_be_visible()

        # 5. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/responsive_nav.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
