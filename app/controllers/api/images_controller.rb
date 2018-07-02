class Api::ImagesController < ApplicationController
  # before_action :set_image, only: [:show, :edit, :update, :destroy]

  # def silly
  #   render plain: "well hello there #{request.remote_ip}"
  # end

  def index
    set_images
  end

  def show
    set_image
    Image.increment_counter(:views, @image.id)
  end

  def create
    @image = Image.new(url: params[:url], ip: request.remote_ip)
    if @image.save
      set_images
      render :index
    else
      render json: @image.errors.full_messages
    end
  end

  def destroy
    set_image
    @image.destroy
    set_images
    render :index
  end

  private

    def set_images
      @images = Image.where(ip: request.remote_ip)
    end

    def set_image
      @image = Image.find(params[:id])
    end

    def image_params
      params.require(:image).permit(:url)
    end
end
