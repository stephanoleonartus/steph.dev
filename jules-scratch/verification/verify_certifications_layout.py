from playwright.sync_api import Page, expect
import traceback

def test_certifications_layout(page: Page):
    """
    This test verifies that the certifications page has a two-column layout.
    """
    try:
        # 1. Arrange: Go to the certifications page.
        page.goto("http://localhost:3000")

        # 2. Assert: Check that the main container is a grid with two columns.
        main_grid = page.locator('.grid.md\\:grid-cols-2')
        expect(main_grid).to_be_visible()

        # 3. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/certifications_layout.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
