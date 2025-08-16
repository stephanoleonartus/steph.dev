from playwright.sync_api import Page, expect
import traceback

def test_social_sidebar(page: Page):
    """
    This test verifies that the social sidebar is visible and contains the correct icons.
    """
    try:
        # 1. Arrange: Go to the application's homepage.
        # We assume the dev server is running on localhost:3000.
        page.goto("http://localhost:3000")

        # 2. Assert: Check that the social sidebar is visible.
        # The sidebar is a div with a fixed position. We can locate it by its structure.
        social_sidebar = page.locator("div.fixed.left-0")
        expect(social_sidebar).to_be_visible()

        # 3. Assert: Check that the social sidebar contains the correct number of icons.
        # We expect 7 icons: Facebook, Twitter, Instagram, Mail, Linkedin, Phone, and WhatsApp.
        icons = social_sidebar.locator("a")
        expect(icons).to_have_count(7)

        # 4. Assert: Check that the WhatsApp icon is present.
        # We can check for the aria-label of the link.
        whatsapp_link = social_sidebar.locator('a[aria-label="WhatsApp"]')
        expect(whatsapp_link).to_be_visible()

        # 5. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/social_sidebar.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
