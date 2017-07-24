class ChildrenController < ApplicationController

  def index
    children = Child.all
    render :json => children
  end

  def show
    child = Child.find( params[:id] )
    render :json => child

  end

  def create
    child = Child.create( child_params)
    render json: child
  end

  def destroy
    child = Child.find(params[:id])
    if child.destroy!
      render :json => {status: :item_removed}
    else
      render :json => {status: :delete_failed}
    end
  end

  private
  def child_params
    params.require(:child).permit([:name, :address, :dob, :image, :emergency_contact, :medical])
  end

end