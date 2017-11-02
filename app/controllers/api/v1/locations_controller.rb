class Api::V1::LocationsController < ApplicationController
  # before_action :set_location

 
def index
    @locations = Location.all
    render json: @locations
end


  def show
  	     @location = Location.find(params[:id])
		render json: @location

  end

  
end