require 'test_helper'

class ProjectsControllerTest < ActionDispatch::IntegrationTest
  test "should get project1" do
    get projects_project1_url
    assert_response :success
  end

end
