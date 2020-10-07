#Import the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import os

#just grabs the root of the folder for pandas
root = os.path.abspath(os.curdir)

#importing the dataset
dataset = pd.read_csv(root + r'\Machine Learning A-Z Template Folder\Part 2 - Regression\Section 4 - Simple Linear Regression\Python\Salary_Data.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values

#Splitting the dataset into the trainning set and test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

#Trainning the simple linear regression model on the trainning set
from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train, y_train) #this trains the model on the trainning data X_train, Y_Train

#prediciting the trainning set results
y_pred = regressor.predict(X_test)

#visualising the trainning set results
plt.scatter(X_train, y_train, color = 'red')
plt.plot(X_train, regressor.predict(X_train), color = 'blue')
plt.title('Salary vs Experience (Training set)')
plt.xlabel('Years of Experience')
plt.ylabel('Salary')
plt.show()

#Visualising the test results
plt.scatter(X_test, y_test, color = 'red')
plt.plot(X_train, regressor.predict(X_train), color = 'blue')
plt.title('Salary vs Experience (Test set)')
plt.xlabel('Years of Experience')
plt.ylabel('Salary')
plt.show()

#Make a single prediciton (12 years of experience)
print(regressor.predict([[12]]))

# 12→scalar 
# [12]→1D array 
# [[12]]→2D array

print(regressor.coef_)
print(regressor.intercept_)

#Equation: Salary = 9345.94 × YearsExperience + 26816.19