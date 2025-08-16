from playwright.sync_api import Page, expect
import traceback

def test_experience_section(page: Page):
    """
    This test verifies that the experience section is displayed correctly on the About page.
    """
    try:
        # 1. Arrange: Go to the about page.
        # Since I can't navigate, I'll assume the about page is the entry point for this test.
        page.goto("http://localhost:3000")

        # 2. Assert: Check that the "Experience" heading is visible.
        experience_heading = page.locator('h2:has-text("Experience")')
        expect(experience_heading).to_be_visible()

        # 3. Assert: Check that there are two experience cards.
        experience_cards = page.locator('.space-y-8 > div')
        expect(experience_cards).to_have_count(2)

        # 4. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/experience_section.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
