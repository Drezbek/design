class HomePageController < ApplicationController

  def index

  end

  def client_message
      ClientMailer.client_email(params[:client]).deliver_now
      redirect_to root_path
  end
end
