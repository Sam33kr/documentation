signin('TestBot', 'r1neazxo9w')
y = randn(500,1);

data = {...
  struct(...
    'y', y, ...
    'type', 'histogram')...
};
response = plotly(data, struct('fileopt', 'overwrite', 'filename', 'horizontal-histogram'));
plot_url = response.url