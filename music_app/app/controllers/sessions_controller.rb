class SessionsController < ApplicationController

  def new
    # render user ##directly goes to new.html.erb
  end

  def create
    user = User.find_by_credentials(params[:user][:email],params[:user][:password])
    debugger
    if user
    session[:session_token] = user.reset_session_token!
    redirect_to users_url
  else
    render :new
  end

  end

  def destroy

  end

  def session_params
  end
end
