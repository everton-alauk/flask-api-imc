class Person:
    def __init__(self, weight, height):
        self.weight = weight
        self.height = height
        self.imc = -1
        self.imcDescription = "N/A"

    def get(self):
        self.imc = int(self.weight) / float(self.height) ** 2
        if self.imc < 18.5:
            self.imcDescription = "Magreza"
        elif self.imc < 24.9:
            self.imcDescription = "Normal"
        elif self.imc <= 30.0:
            self.imcDescription = "Sobrepeso"
        elif self.imc > 30.0:
            self.imcDescription = "Obesidade"
        return self
