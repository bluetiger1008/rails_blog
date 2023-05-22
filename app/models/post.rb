class Post < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true
    validates :slug, presence: true
end
