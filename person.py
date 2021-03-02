class Person:
    def __init__(self, weight, height):
        self.weight = weight
        self.height = height
        self.imc = None
        self.description = None

    def get(self):
        self.imc = int(self.weight) / float(self.height) ** 2
        if self.imc < 18.5:
            self.description = "Magreza"
        elif self.imc < 24.9:
            self.description = "Normal"
        elif self.imc <= 30.0:
            self.description = "Sobrepeso"
        elif self.imc > 30.0:
            self.description = "Obesidade"
        return self
