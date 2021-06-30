# file: _plugins/tags_generator.rb

require 'logger'
require 'yaml'

tags = []
outdir = './source/_pages/*'

@logger = Logger.new(STDOUT)

Dir.glob(outdir) do |file|
    filename = File.basename(file, ".md")
    @logger.debug(filename)
end     
Dir.glob(File.join('./source/_pages/animations/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end

Dir.glob(File.join('./source/_pages/buttons/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/cards/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/code/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/colors/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/debugging/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/divider/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/forms/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/getting-started/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/grid/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/links/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('_pages/index/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/paragraph/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/tables/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/terms/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end
Dir.glob(File.join('./source/_pages/typography/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.safe_load(yaml_s)
    tags += yaml_h['tags'] 
    #@logger.debug(tags[1])
end

tags.map(&:downcase).uniq.each do |tag|
	File.write File.join('tags', "#{tag}.html"), <<-EOF
---
layout: tag_pages
tag: #{tag}
permalink: /tags/#{tag}
---
	EOF
end