class JobSkillSetSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :skill_description
  belongs_to :job
end
