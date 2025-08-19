/*
  # Seed Initial Data for DataQuest Solutions

  1. Sample Courses
    - Insert the existing courses from the website
    - Set appropriate pricing and details

  2. Sample Blog Posts
    - Create initial blog content

  3. Admin User Setup
    - Note: Admin users will be created through the application
*/

-- Insert sample courses
INSERT INTO courses (title, description, level, duration, price, icon, topics, skills, tools, certification) VALUES
(
  'Advanced Excel',
  'Master advanced Excel functions, data analysis tools, and automation techniques for efficient data management.',
  'intermediate',
  '6 weeks',
  5000,
  'BarChart',
  '["Advanced formulas and functions", "Data validation and error handling", "Pivot tables and data analysis", "Macros and VBA programming", "Data visualization and dashboards", "Power Query and Power Pivot", "Advanced charting techniques", "Data modeling and analysis"]'::jsonb,
  '["Advanced Excel functions", "Data analysis and visualization", "Automation and macros", "Business intelligence tools", "Data modeling"]'::jsonb,
  '["Microsoft Excel", "Power Query", "Power Pivot", "VBA"]'::jsonb,
  'Advanced Excel Professional Certificate'
),
(
  'Data Analysis With Python',
  'Learn data manipulation, analysis, and visualization using Python libraries like Pandas, NumPy, and Matplotlib.',
  'intermediate',
  '8 weeks',
  6000,
  'Code',
  '["Python fundamentals for data analysis", "NumPy for numerical computing", "Pandas for data manipulation", "Data cleaning and preprocessing", "Statistical analysis", "Data visualization with Matplotlib and Seaborn", "Time series analysis", "Data storytelling and reporting"]'::jsonb,
  '["Python programming", "Data manipulation", "Statistical analysis", "Data visualization", "Data cleaning"]'::jsonb,
  '["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"]'::jsonb,
  'Python Data Analysis Professional Certificate'
),
(
  'Data Analysis With R',
  'Comprehensive course on statistical computing and data analysis using R programming language.',
  'intermediate',
  '8 weeks',
  6000,
  'Database',
  '["R programming fundamentals", "Data structures and manipulation", "Statistical analysis", "Data visualization with ggplot2", "Regression analysis", "Time series analysis", "Machine learning basics", "R Markdown and reporting"]'::jsonb,
  '["R programming", "Statistical analysis", "Data visualization", "Regression modeling", "Data reporting"]'::jsonb,
  '["R", "RStudio", "ggplot2", "dplyr", "tidyr"]'::jsonb,
  'R Data Analysis Professional Certificate'
),
(
  'Machine Learning with Python',
  'Learn machine learning algorithms, model development, and implementation using Python.',
  'advanced',
  '10 weeks',
  8000,
  'Brain',
  '["Machine learning fundamentals", "Supervised learning algorithms", "Unsupervised learning", "Model evaluation and validation", "Feature engineering", "Hyperparameter tuning", "Model deployment", "Real-world applications"]'::jsonb,
  '["Machine learning", "Python programming", "Model development", "Feature engineering", "Model deployment"]'::jsonb,
  '["Scikit-learn", "TensorFlow", "PyTorch", "Python"]'::jsonb,
  'Machine Learning Professional Certificate'
),
(
  'Deep Learning with Python',
  'Explore neural networks, deep learning architectures, and implementation using Python frameworks.',
  'advanced',
  '10 weeks',
  8000,
  'Brain',
  '["Neural network fundamentals", "Deep learning architectures", "Convolutional Neural Networks", "Recurrent Neural Networks", "Transfer learning", "Model optimization", "Deep learning frameworks", "Real-world applications"]'::jsonb,
  '["Deep learning", "Neural networks", "Python programming", "Model optimization", "Transfer learning"]'::jsonb,
  '["TensorFlow", "PyTorch", "Keras", "Python"]'::jsonb,
  'Deep Learning Professional Certificate'
),
(
  'Data Visualization with Tableau and Power BI',
  'Create interactive dashboards and compelling visualizations using Tableau and Power BI.',
  'intermediate',
  '6 weeks',
  5000,
  'Layers',
  '["Data visualization principles", "Tableau fundamentals", "Power BI basics", "Data connection and preparation", "Advanced visualization techniques", "Dashboard design and layout", "Interactive features and filters", "Data storytelling and presentation"]'::jsonb,
  '["Data visualization", "Dashboard design", "Interactive reporting", "Data storytelling", "Business intelligence"]'::jsonb,
  '["Tableau", "Power BI", "Excel"]'::jsonb,
  'Data Visualization Professional Certificate'
);

-- Insert sample blog posts
INSERT INTO blog_posts (title, content, excerpt, published, published_at) VALUES
(
  'Getting Started with Data Science in 2024',
  'Data science has become one of the most sought-after fields in technology. In this comprehensive guide, we''ll explore the essential skills, tools, and career paths available in data science today...',
  'A comprehensive guide to starting your data science journey in 2024, covering essential skills, tools, and career opportunities.',
  true,
  now()
),
(
  'The Future of AI in Healthcare',
  'Artificial Intelligence is revolutionizing healthcare delivery across Africa. From diagnostic tools to treatment optimization, AI is making healthcare more accessible and effective...',
  'Exploring how AI is transforming healthcare delivery in Africa and the opportunities it presents for medical professionals.',
  true,
  now() - interval '1 week'
),
(
  'Data Collection Best Practices for Research',
  'Effective data collection is the foundation of any successful research project. This article covers best practices for designing surveys, managing data quality, and ensuring ethical compliance...',
  'Essential best practices for effective data collection in research projects, covering survey design and data quality management.',
  true,
  now() - interval '2 weeks'
);