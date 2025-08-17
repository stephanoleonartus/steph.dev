from playwright.sync_api import Page, expect
import traceback

def test_project_modal(page: Page):
    """
    This test verifies that the project modal opens and displays the correct content.
    """
    try:
        # 1. Arrange: Go to the application's homepage.
        page.goto("http://localhost:3000")

        # 2. Act: Click the "View Details" button on the first project.
        view_details_button = page.locator('.grid > div:first-child button')
        view_details_button.click()

        # 3. Assert: Check that the modal is visible.
        modal = page.locator('.fixed.inset-0')
        expect(modal).to_be_visible()

        # 4. Assert: Check that the modal contains the correct project title.
        project_title = modal.locator('h2')
        expect(project_title).to_have_text('Project Alpha')

        # 5. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/project_modal.png")
        print("Screenshot created successfully.")

    except Exception as e:
        print("An error occurred during Playwright script execution:")
        traceback.print_exc()
