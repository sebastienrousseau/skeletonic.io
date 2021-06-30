# file: _plugins/sub_nav_generator.rb

require "nokogiri"
require "logger"

module Jekyll
    class SubNavGenerator < Generator
      safe true

        def generate(site)
            parser = Jekyll::Converters::Markdown.new(site.config)

            site.pages.each do |page|
            if page.ext == ".md"
              doc = Nokogiri::HTML(parser.convert(page["content"]))
              page.data["subnav"] = []
              doc.css('h3').each do |heading|
              page.data["subnav"] << { "title": heading.text, "url": [page.url, heading['id']].join("#") }
              end
            end
        end
        end
    end
end