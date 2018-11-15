class AlbumsController < ApplicationController
  def new
    @bands = Band.all
  end

  def create
    @album = Album.new(album_params)
    # @album.band_id = params[:band_id]
    if @album
      @album.save!
      render json:@album
    else
      flash.now[:errors] = @album.errors.full_messages
      render :new
    end

  end

  def edit
  end

  def show
  end

  def update
  end

  def index
    @albums = Album.all
    render json:@albums
  end

  def destroy
  end

  def album_params
    params.require(:album).permit(:title,:year,:type_of_band,:band_id)
  end
end
