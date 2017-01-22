class InventionsController < ApplicationController
  def index
    @inventions = Invention.all
  end

  def create
    # make sure we have bits for the invention
    if params[:bits].present?
      bits_list = params[:bits].split(/[\s,]+/).uniq
      if bits_list.empty?
        flash[:error] = "Please select at least one bit"
        return redirect_to action: "new"
      end
    else
      flash[:error] = "Please select at least one bit"
      return redirect_to action: "new"
    end

    invention = Invention.create({
      title: params[:title],
      description: params[:description],
      email: params[:email],
      username: params[:name],
    })

    add_bits_to_invention(bits_list, invention)

    if params[:image].present?
      invention.image = params[:image]
      invention.save!
    end

    if params[:materials].present?
      material_list = params[:materials].split(/[\s,]+/)
      invention.material_list = material_list
      invention.save!
    end
    redirect_to action: "index"
  end

  def show
    @invention = Invention.find(params[:id])
    @bits_list = @invention.bits.map(&:name)
  end

  def new
  end

  private

  def add_bits_to_invention(bits_list, invention)
    bits_list.each do |bit_name|
      bit = Bit.find_by_name(bit_name)
      invention.bits << bit
    end
  end
end
