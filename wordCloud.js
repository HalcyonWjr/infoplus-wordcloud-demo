document.addEventListener("DOMContentLoaded", function() {
    const words = ['Academic', 'Academic', 'Academic', 'Academic', 'Academic', 'Academy', 'Accessibility', 'Accessible', 'Activist', 'Advocate', 'Affiliated', 'Analyst', 'Analyst', 'Analyst', 'Analyst', 'Analytics', 'Architecture', 'Architecture', 'Art', 'Art', 'Artist', 'Artist', 'Artist', 'Artist', 'Audit', 'Audit', 'Author', 'Background', 'Biomedical', 'Blogger', 'Bumped', 'CS', 'Candidate', 'Care', 'Cheminformatics', 'Coming', 'Communication', 'Communication', 'Communication', 'Communication', 'Communications', 'Communications', 'Computer', 'Computer', 'Computer', 'Computer', 'Computer', 'Computing', 'Consultant', 'Consultant', 'Controller', 'Creative', 'Cultural', 'Cultural', 'DESIGN', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'Data', 'DataViz', 'Datavis', 'Dataviz', 'Dataviz', 'Datawrapper', 'De', 'Department', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Design', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Designer', 'Desing', 'Developer', 'Developer', 'Developer', 'Developer', 'Developer', 'Developing', 'Digital', 'Director', 'Doctoral', 'Editor', 'Editor', 'Education', 'Education', 'Educator', 'Educator', 'Engineer', 'Engineer', 'Engineer', 'Engineer', 'Engineering', 'Engineering', 'Environmental', 'Ethics', 'Evaluation', 'Experience', 'Experience', 'Expert', 'Explainable', 'Federal', 'Filmmaker', 'Fluency', 'Focus', 'Former', 'Freelance', 'Frontend', 'GIS', 'Geographic', 'Geopolitics', 'Geospatial', 'Global', 'Good', 'Graphic', 'Graphic', 'Graphics', 'Graphics', 'HCI', 'HCI', 'HCI', 'HCI', 'Hci', 'Head', 'Health', 'Health', 'Health', 'Health', 'Healthcare', 'Heritage', 'Heritage', 'Human', 'Humanism', 'Illustration', 'Illustrator', 'Independent', 'Industry', 'Infographic', 'Informatics', 'Informatics', 'Informatics', 'Information', 'Information', 'Information', 'Information', 'Information', 'Information', 'Information', 'Information', 'Information', 'Information', 'Information', 'Information', 'Infovis', 'Inspirator', 'Interaction', 'Interaction', 'Interaction', 'Interaction', 'Interactive', 'Interface', 'International', 'Janeiro', 'Journalism', 'Journalism', 'Journalism', 'Journalist', 'Journalist', 'Journalist', 'Journalist', 'Journalist', 'Knowledge', 'Lead', 'Lead', 'Learn', 'Literacy', 'MS', 'Manager', 'Manager', 'Medical', 'Medicine', 'Moderate', 'Nearly', 'Network', 'News', 'Now', 'Operations', 'PL', 'Participatory', 'PhD', 'PhD', 'PhD', 'PhD', 'PhD', 'PhD', 'PhD', 'Philanthropy', 'Planning', 'Practicioner', 'Practitioner', 'Precision', 'Primary', 'Producing', 'Product', 'Professional', 'Professionally', 'Professor', 'Program', 'Recommender', 'Relations', 'Representation', 'Research', 'Research', 'Research', 'Research', 'Researcher', 'Researcher', 'Researcher', 'Researcher', 'Researcher', 'Researcher', 'Researcher', 'Researcher', 'Resources', 'Rights', 'Rio', 'Scholar', 'School', 'School', 'School', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Science', 'Scientific', 'Scientist', 'Scientist', 'Scientist', 'Secondary', 'Small', 'Social', 'Software', 'Software', 'Software', 'Specialist', 'Speculative', 'Storyteller', 'Storytelling', 'Student', 'Student', 'Student', 'Student', 'Student', 'Student', 'Student', 'Studied', 'Studies', 'Support', 'Support', 'System', 'System', 'Systemic', 'Systems', 'Teacher', 'Teacher', 'Teacher', 'Tech', 'Technical', 'Technologist', 'UI', 'UX', 'UX', 'UX', 'UX', 'UX', 'Unit', 'University', 'UoE', 'Visual', 'Visual', 'Visual', 'Visual', 'Visual', 'Visual', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Visualization', 'Viz', 'Viz', 'Viz', 'Web', 'Web', 'Worker', 'Working', 'Working', 'Year', 'Years'];

    let topN = 10; 
    const wordFrequency = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    const width = window.innerWidth - 400;
    const height = window.innerHeight - 400;

    const customColors = ['#6A6ECF', '#5254A3', '#8DA252', '#B5CF6B',
                          '#393B79', '#9C9EDE', '#637939', '#CFDB9B', 
                          '#843C38', '#E6969C', '#D172BF', '#DD9ED6', 
                          '#BE9E39', '#E7BA51', '#8C6D31', '#E7CB94', ];

    const color = d3.scaleOrdinal(customColors);

    function updateWordCloud() {
        const topWords = Object.entries(wordFrequency)
            .sort((a, b) => b[1] - a[1])
            .slice(0, topN);

        const fontSizeScale = d3.scaleLinear()
            .domain([1, wordFrequency[topWords[0][0]]])
            .range([20, 200]);

        const layout = d3.layout.cloud()
            .size([width, height])
            .words(topWords.map(function(d, i) {
                return {text: d[0], size: fontSizeScale(d[1]), color: color(i)};
            }))
            .padding(5)
            .rotate(0)
            .font("Impact")
            .fontSize(function(d) { return d.size; })
            .spiral("archimedean")
            .on("end", draw);

        layout.start();

        function draw(words) {
            d3.select("#wordCloud").selectAll("*").remove();

            const svg = d3.select("#wordCloud").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            const text = svg.selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-family", "Impact")
                .style("fill", function(d) { return d.color; })
                .attr("text-anchor", "middle")
                .text(function(d) { return d.text; });

            text.style("font-size", "1px")
                .attr("transform", "translate(0, 0) rotate(0)");

            text.transition()
                .duration(200)
                .style("font-size", function(d) { return d.size + "px"; })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")";
                });
        }
    }


    updateWordCloud();

    setInterval(function() {
        topN += 5;
        if (topN > 100) {
            topN = 10; // loop
        }
        updateWordCloud();
    }, 3500);
});