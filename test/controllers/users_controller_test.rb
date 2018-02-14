require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get Games" do
    get users_Games_url
    assert_response :success
  end

end
