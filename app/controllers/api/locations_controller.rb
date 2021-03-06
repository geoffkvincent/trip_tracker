class Api::LocationsController < ApplicationController
  before_action :set_trip
  before_action :set_location, only: [:update, :destroy]

  def index
    render json: @trip.locations
  end

  def create
    location = @trip.locations.new(location_params)

    if location.save
      render json: location
    else
      render json: { errors: @location.errors }
    end
  end

  def update
  end

  def destroy
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def set_location
    @location = Location.find(params[:id])
  end

  def location_params
    params.require(:location).permit(:name, :days)
  end
end
