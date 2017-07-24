# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170723130540) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "children", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.integer  "age"
    t.string   "image"
    t.string   "dob"
    t.string   "emergency_contact"
    t.string   "medical"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "performs", force: :cascade do |t|
    t.string   "date"
    t.integer  "child_id"
    t.integer  "task_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "performs", ["child_id"], name: "index_performs_on_child_id", using: :btree
  add_index "performs", ["task_id"], name: "index_performs_on_task_id", using: :btree

  create_table "tasks", force: :cascade do |t|
    t.string   "name"
    t.string   "image"
    t.string   "desc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "performs", "children"
  add_foreign_key "performs", "tasks"
end
