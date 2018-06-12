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

ActiveRecord::Schema.define(version: 20180612001356) do

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "player"
    t.text "concept"
    t.integer "maxHealth"
    t.integer "currentHealth"
    t.integer "brawn"
    t.integer "agility"
    t.integer "wit"
    t.integer "intelligence"
    t.integer "charm"
    t.integer "presense"
    t.integer "maxDodge"
    t.integer "currentDrive"
    t.integer "initiative"
    t.integer "maxDrive"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "game_id"
    t.integer "athletics"
    t.integer "biology"
    t.integer "computers"
    t.integer "empathy"
    t.integer "engineering"
    t.integer "explosives"
    t.integer "firearms"
    t.integer "investigation"
    t.integer "law"
    t.integer "lying"
    t.integer "melee"
    t.integer "perform"
    t.integer "piloting"
    t.integer "persuasion"
    t.integer "sneaking"
    t.integer "spacewise"
    t.integer "survival"
    t.integer "telekinesis"
    t.integer "telepathy"
    t.integer "special"
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.boolean "locked"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "gm_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.string "name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
