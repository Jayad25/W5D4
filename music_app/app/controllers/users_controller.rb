class UsersController < ApplicationController
  def new
    user = User.new
  end

  def index
    @users = User.all

  end
  def show
  end

  def create
    @user = User.new(user_params)
    if @user
      @user.save!
      redirect_to bands_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:email,:password)
  end
end
