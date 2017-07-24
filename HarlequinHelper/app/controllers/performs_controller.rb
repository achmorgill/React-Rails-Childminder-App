class PerformsController < ApplicationController 

  def index

    if params[:child_id]
      child = Child.find(params[:child_id])
      performs = child.performs
      render :json => performs.as_json(include: :task)
    end
    if params[:task_id]
      task = Task.find(params[:task_id])
      performs = task.performs
      render :json => performs.as_json(include: :child)
    end
  end
end