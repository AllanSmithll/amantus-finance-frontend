export class Income {

  public id?: string
  public description?: string
  public value?: number
  public date?: string
  public category?: string
  public frequency?: string
  public origin?: string
  public add_information?: string

    constructor(id?: string, income: Income = {}) {
      this.id = id,
      this.description = income.description,
      this.value = income.value,
      this.date = income.date,
      this.category = income.category,
      this.frequency = income.frequency,
      this.origin = income.origin ,
      this.add_information = income.add_information
    }
}