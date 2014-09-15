library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    x = c(1, 2, 3, 4), 
    y = c(2, 1, 3, 4), 
    error_y = list(
      type = "percent", 
      symmetric = FALSE, 
      value = 15, 
      valueminus = 25
    ), 
    type = "scatter"
  )
)
response <- p$plotly(data, kwargs=list(fileopt="overwrite", filename="error-bar-asymmetric-constant"))
url <- response$url