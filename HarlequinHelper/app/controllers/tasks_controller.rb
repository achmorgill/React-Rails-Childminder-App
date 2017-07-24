class TasksController < ApplicationController 

  def index
    tasks = Task.all
    render :json => tasks
  end

  def show
    task = Task.find(params[:id])
    render :json => task
  end

  def create
    task = Task.create( task_params)
    render json: task
  end

  def destroy
    task = Task.find(params[:id])
    if task.destroy!
      render :json => {status: :item_removed}
    else
      render :json => {status: :delete_failed}
    end
  end

  private
  def task_params
    params.require(:task).permit([:name, :image, :desc])
  end

end
