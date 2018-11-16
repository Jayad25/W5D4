require 'rails_helper'



RSpec.describe User, type: :model do
it { should validate_presence_of(:email) }
it { should validate_presence_of(:password_digest) }
it { should validate_length_of(:password).is_at_least(6) }
end

describe "#reset_session_token!" do
  subject(:user) {User.new(email:"gh@gmail.com",password:"vvfdva")}
    it "sets a new session token on the user" do
      user.valid?
      old_session_token = user.session_token
      user.reset_session_token!

      # Miniscule chance this will fail.
      expect(user.session_token).to_not eq(old_session_token)
    end
  end

  describe "#is_password?" do
    subject(:user) {User.new(email:"gh@gmail.com",password:"good_password")}
   it "verifies a password is correct" do
     expect(user.is_password?("good_password")).to be true
   end

   it "verifies a password is not correct" do
     expect(user.is_password?("bad_password")).to be false
   end
 end
