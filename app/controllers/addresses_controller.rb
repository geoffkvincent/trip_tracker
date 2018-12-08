class AddressesController < ApplicationController
  before_action :set_location
  before_action :set_address

  def index
    @addresses = Location.addresses
  end

  def create
    @address = @location.addresses.new(address_params)

    if @address.save
      render json: @address
    else
      render json: { errors: @address.errors }
  end

  def update
  end

  def destroy
  end

  private

  def set_location
    @location = Location.find(params[location_id])
  end

  def set_address
    @address = Address.find(params[:id])
  end

  def address_params
    params.require(:address).permit(:street, :city, :state, :zip)
  end
end
