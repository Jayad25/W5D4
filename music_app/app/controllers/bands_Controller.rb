class BandsController < ApplicationController
  def index
    @bands = Band.all
  end

  def create
    @band = Band.new(band_params)
    if @band
      @band.save!
      redirect_to bands_url
    else
       flash.now[:errors] = @band.errors.full_messages
      render :new
    end
  end

  def update
    @band = Band.find(params[:id])
    if @band.update_attributes(band_params)
      render json:@band
    else
      flash.now[:errors] = @band.errors.full_messages
      render :edit
    end
  end


def destroy
  @band = Band.find(params[:id])
  @band.destroy
end
  def band_params
    params.require(:band).permit(:name)
  end
end
