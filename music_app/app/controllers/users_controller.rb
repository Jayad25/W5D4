class UsersController < ApplicationController
  def new
    user = User.new
  end

  def index
    user = User.all
    render json:user
  end
  def show
  end

  def create
    user = User.new(user_params)
    if user
      user.save!
      render json:user
    else
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:email,:password)
  end
end
