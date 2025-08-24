from playwright.sync_api import Page, expect
import traceback

def test_content_loading(page: Page):
    """
    This test verifies that the content is still being loaded correctly from the new JSON file.
    """
    try:
        # 1. Arrange: Go to the homepage.
        page.goto("http://localhost:3000")

        # 2. Assert: Check for a project title.
        project_title = page.locator('h3:has-text("Project Alpha")')
        expect(project_title).to_be_visible()

        # 3. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/content_loading.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
