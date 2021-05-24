
require 'logger'
require 'yaml'

categories = []
outdir = '_pages/*'

@logger = Logger.new(STDOUT)

Dir.glob(outdir) do |file|
    filename = File.basename(file, ".md")
    @logger.debug(filename)
end     
Dir.glob(File.join('_pages/animations/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end

Dir.glob(File.join('_pages/button-groups/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/cards/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/code/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/colour-palette/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/debugging/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/divider/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/forms/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/getting-started/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/grid-system/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/html-links/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/index/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/paragraph/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
Dir.glob(File.join('_pages/tables/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end
# Dir.glob(File.join('_pages/terms/', '*.md')) do |file|
#     yaml_s = File.read(file).split(/^---$/)[1]
#     yaml_h = YAML.load(yaml_s)
#     categories += yaml_h['categories'] 
#     #@logger.debug(categories[1])
# end
Dir.glob(File.join('_pages/typography/', '*.md')) do |file|
    yaml_s = File.read(file).split(/^---$/)[1]
    yaml_h = YAML.load(yaml_s)
    categories += yaml_h['categories'] 
    #@logger.debug(categories[1])
end

categories.map(&:downcase).uniq.each do |category|
	File.write File.join('categories', "#{category}.html"), <<-EOF
---
layout: category_pages
category: #{category}
permalink: /categories/#{category}
---
	EOF
end