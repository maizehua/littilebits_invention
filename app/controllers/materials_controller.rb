class MaterialsController < ApplicationController
  def index
    all_materials = Invention.tag_counts_on(:materials)
    render :json => {
      data: all_materials
    }
  end

  def filter
    query = params[:query]
    filtered_materials = Invention.tag_counts_on(:materials).where("name LIKE ?", "%#{query}%")
    render :json => {
      data: filtered_materials
    }
  end
end
