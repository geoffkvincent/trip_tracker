class Api::TripsController < ApplicationController
  before_action :set_trip, only: [:update, :destroy]
  def index
    render json: Trip.all
  end

  def create
    trip = Trip.new(trip_params)

    if trip.save
      render json: trip
    else
      render json: { errors: trip.errors }
    end
  end

  def update
  end

  def destroy
  end

  private

  def trip_params
    params.require(:trip).permit(:name)
  end

  def set_trip
    @trip = Trip.find(params[:id])
  end
end
