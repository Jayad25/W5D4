class SessionsController < ApplicationController

  def new
    # render user ##directly goes to new.html.erb
  end

  def create
    @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
    # debugger
    if @user
    log_in_user!(@user)
    redirect_to users_url
  else
    flash.now[:errors] = @user.errors.full_messages
    render :new
  end

  end



  def destroy
    # debugger
    logout
    redirect_to new_session_url
  end
end
