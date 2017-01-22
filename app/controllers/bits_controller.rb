class BitsController < ApplicationController
  def index
    render :json => {
      data: Bit.all
    }
  end

  def filter
    query = params[:query]
    filtered_bits = Bit.where("name LIKE ?", "%#{query}%")
    render :json => {
      data: filtered_bits
    }
  end
end
