class InventionsController < ApplicationController
  def index
    @inventions = Invention.all
  end

  def create
    invention = Invention.create({
      title: params[:title],
      description: params[:description],
      email: params[:email],
      username: params[:name],
    })
    if params[:materials].present?
      material_list = params[:materials].split(/[\s,]+/)
      invention.material_list = material_list
      invention.save!
    end
    redirect_to action: "index"
  end

  def show
    @invention = Invention.find(params[:id])
  end

  def new
  end
end
