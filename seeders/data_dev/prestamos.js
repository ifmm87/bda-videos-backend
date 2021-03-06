const id = require("pow-mongodb-fixtures").createObjectId;
var MyDate = new Date(2021, 04, 04, 14, 12)
exports.prestamos = {
  item1: {
    _id: id("000000000000000000000001"),
    cliente: id("000000000000000000000001"),
    videos: [id("569190ca24de1e0ce2dfcd4f"), id("569190cb24de1e0ce2dfcd50")],
    fechaDevolucion: new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item2: {
    _id: id("000000000000000000000002"),
    cliente: id("000000000000000000000001"),
    videos: [id("569190ca24de1e0ce2dfcd4f"), id("569190cb24de1e0ce2dfcd50")],
    fechaDevolucion:  new Date("2021-04-05"),
    diasPrestamo: 1,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item3: {
    _id: id("000000000000000000000003"),
    cliente: id("000000000000000000000003"),
    videos: [
      id("569190cb24de1e0ce2dfcd54"),
      id("569190cc24de1e0ce2dfcd55"),
      id("569190cc24de1e0ce2dfcd56"),
    ],
    fechaDevolucion:  new Date("2021-04-05"),
    diasPrestamo: 1,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item4: {
    _id: id("000000000000000000000004"),
    cliente: id("000000000000000000000004"),
    videos: [id("569190cc24de1e0ce2dfcd58")],
    fechaDevolucion:  new Date("2021-04-05"),
    diasPrestamo: 1,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item5: {
    _id: id("000000000000000000000005"),
    cliente: id("000000000000000000000005"),
    videos: [id("569190cc24de1e0ce2dfcd58")],
    fechaDevolucion:  new Date("2021-04-06"),
    diasPrestamo: 2,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item6: {
    _id: id("000000000000000000000006"),
    cliente: id("000000000000000000000006"),
    videos: [id("569190cc24de1e0ce2dfcd59"), id("569190cc24de1e0ce2dfcd5a")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item7: {
    _id: id("000000000000000000000007"),
    cliente: id("000000000000000000000007"),
    videos: [id("569190cc24de1e0ce2dfcd5b"), id("569190cc24de1e0ce2dfcd5c")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item8: {
    _id: id("000000000000000000000008"),
    cliente: id("000000000000000000000008"),
    videos: [id("569190cd24de1e0ce2dfcd5d")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item9: {
    _id: id("000000000000000000000009"),
    cliente: id("000000000000000000000009"),
    videos: [id("569190cd24de1e0ce2dfcd5e")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item10: {
    _id: id("000000000000000000000010"),
    cliente: id("000000000000000000000010"),
    videos: [id("569190cd24de1e0ce2dfcd60"), id("569190cd24de1e0ce2dfcd5f")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item11: {
    _id: id("000000000000000000000011"),
    cliente: id("000000000000000000000011"),
    videos: [id("569190cd24de1e0ce2dfcd5f")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item12: {
    _id: id("000000000000000000000012"),
    cliente: id("000000000000000000000012"),
    videos: [id("569190cd24de1e0ce2dfcd60")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item13: {
    _id: id("000000000000000000000013"),
    cliente: id("000000000000000000000013"),
    videos: [id("569190cd24de1e0ce2dfcd62"), id("569190cd24de1e0ce2dfcd60")],
    fechaDevolucion:  new Date("2021-04-06"),
    diasPrestamo: 2,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item14: {
    _id: id("000000000000000000000014"),
    cliente: id("000000000000000000000014"),
    videos: [id("569190ce24de1e0ce2dfcd6b"), id("569190ce24de1e0ce2dfcd6c")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item15: {
    _id: id("000000000000000000000015"),
    cliente: id("000000000000000000000015"),
    videos: [id("569190ce24de1e0ce2dfcd6d")],
    fechaDevolucion:  new Date("2021-04-08"),
    diasPrestamo: 4,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },

  item16: {
    _id: id("000000000000000000000016"),
    cliente: id("000000000000000000000016"),
    videos: [id("569190cf24de1e0ce2dfcd6e")],
    fechaDevolucion:  new Date("2021-04-10"),
    diasPrestamo: 6,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,

    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },

  item17: {
    _id: id("000000000000000000000017"),
    cliente: id("000000000000000000000017"),
    videos: [id("569190cf24de1e0ce2dfcd6f")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },

  item18: {
    _id: id("000000000000000000000018"),
    cliente: id("000000000000000000000018"),
    videos: [id("569190cf24de1e0ce2dfcd70"), id("569190cf24de1e0ce2dfcd71")],
    fechaDevolucion:  new Date("2021-04-06"),
    diasPrestamo: 2,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item19: {
    _id: id("000000000000000000000019"),
    cliente: id("000000000000000000000019"),
    videos: [id("569190cf24de1e0ce2dfcd73")],
    fechaDevolucion:  new Date("2021-04-06"),
    diasPrestamo: 2,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },

  item20: {
    _id: id("000000000000000000000020"),
    cliente: id("000000000000000000000020"),
    videos: [id("569190cf24de1e0ce2dfcd76")],
    fechaDevolucion:  new Date("2021-04-05"),
    diasPrestamo: 1,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },

  item21: {
    _id: id("000000000000000000000021"),
    cliente: id("000000000000000000000001"),
    videos: [id("569190cf24de1e0ce2dfcd76"), id("569190d024de1e0ce2dfcd77")],
    fechaDevolucion:  new Date("2021-04-06"),
    diasPrestamo: 2,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,

    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item22: {
    _id: id("000000000000000000000022"),
    cliente: id("000000000000000000000002"),
    videos: [id("569190d024de1e0ce2dfcd78"), id("569190ce24de1e0ce2dfcd68")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,

    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item23: {
    _id: id("000000000000000000000023"),
    cliente: id("000000000000000000000003"),
    videos: [
      id("569190ce24de1e0ce2dfcd69"),
      id("569190d024de1e0ce2dfcd78"),
      id("569190d024de1e0ce2dfcd77"),
    ],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item24: {
    _id: id("000000000000000000000024"),
    cliente: id("000000000000000000000004"),
    videos: [id("569190ca24de1e0ce2dfcd4f"), id("569190cb24de1e0ce2dfcd50")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item25: {
    _id: id("000000000000000000000025"),
    cliente: id("000000000000000000000005"),
    videos: [id("569190cb24de1e0ce2dfcd51")],
    fechaDevolucion:  new Date("2021-04-09"),
    diasPrestamo: 5,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item26: {
    _id: id("000000000000000000000026"),
    cliente: id("000000000000000000000006"),
    videos: [id("569190cb24de1e0ce2dfcd51")],
    fechaDevolucion:  new Date("2021-04-10"),
    diasPrestamo: 6,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item27: {
    _id: id("000000000000000000000027"),
    cliente: id("000000000000000000000007"),
    videos: [id("569190cb24de1e0ce2dfcd54")],
    fechaDevolucion:  new Date("2021-04-06"),
    diasPrestamo: 2,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item28: {
    _id: id("000000000000000000000028"),
    cliente: id("000000000000000000000008"),
    videos: [id("569190cc24de1e0ce2dfcd55"), id("569190cc24de1e0ce2dfcd56")],
    fechaDevolucion:  new Date("2021-04-10"),
    diasPrestamo: 6,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item29: {
    _id: id("000000000000000000000029"),
    cliente:id("000000000000000000000009"),
    videos: [id("569190cc24de1e0ce2dfcd56"), id("569190cc24de1e0ce2dfcd58")],
    fechaDevolucion:  new Date("2021-04-11"),
    diasPrestamo: 7,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  itemr30: {
    _id: id("000000000000000000000030"),
    cliente: id("000000000000000000000010"),
    videos: [id("569190cc24de1e0ce2dfcd5a"), id("569190cc24de1e0ce2dfcd5b")],
    fechaDevolucion:  new Date("2021-04-05"),
    diasPrestamo: 1,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  itemr31: {
    _id: id("000000000000000000000031"),
    cliente: id("000000000000000000000011"),
    videos: [id("569190cc24de1e0ce2dfcd5c")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item32: {
    _id: id("000000000000000000000032"),
    cliente: id("000000000000000000000012"),
    videos: [
      id("569190cd24de1e0ce2dfcd5e"),
      id("569190cd24de1e0ce2dfcd5f"),
      id("569190cd24de1e0ce2dfcd60"),
      id("569190cd24de1e0ce2dfcd62"),
    ],
    fechaDevolucion:  new Date("2021-04-08"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item33: {
    _id: id("000000000000000000000033"),
    cliente: id("000000000000000000000013"),
    videos: [id("569190ce24de1e0ce2dfcd6b")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: false,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item34: {
    _id: id("000000000000000000000034"),
    cliente:id("000000000000000000000014"),
    videos: [id("569190ce24de1e0ce2dfcd6c")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item35: {
    _id: id("000000000000000000000035"),
    cliente: id("000000000000000000000015"),
    videos: [
      id("569190cf24de1e0ce2dfcd6e"),
      id("569190cf24de1e0ce2dfcd6f"),
      id("569190cf24de1e0ce2dfcd70"),
      id("569190cf24de1e0ce2dfcd71")
    ],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item36: {
    _id: id("000000000000000000000036"),
    cliente: id("000000000000000000000016"),
    videos: [id("569190cf24de1e0ce2dfcd73"), id("569190cf24de1e0ce2dfcd76")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },

  item37: {
    _id: id("000000000000000000000037"),
    cliente: id("000000000000000000000017"),
    videos: [id("569190cf24de1e0ce2dfcd76")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },

  item38: {
    _id: id("000000000000000000000038"),
    cliente:id("000000000000000000000018"),
    videos: [id("569190d024de1e0ce2dfcd78")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item39: {
    _id: id("000000000000000000000039"),
    cliente: id("000000000000000000000019"),
    videos: [id("569190ce24de1e0ce2dfcd68"), id("569190ce24de1e0ce2dfcd69")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
  item40: {
    _id: id("000000000000000000000040"),
    cliente: id("000000000000000000000020"),
    videos: [id("569190cc24de1e0ce2dfcd5c"), id("569190ce24de1e0ce2dfcd6c")],
    fechaDevolucion:  new Date("2021-04-07"),
    diasPrestamo: 3,
    descuento: 4,
    importeTotal: 50,
    devuelto: true,
    createAt: MyDate,
    updateAt: new Date(),
    deleted: false,
  },
};
