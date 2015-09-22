
            $(document).ready(function() {
                
                $('#countdown2').ClassyCountdown({

                    end: '400000',
                    now: '0',
                    labels: true,
                    labelsOptions: {
                    lang: {
                      days: 'Дней',
                      hours: 'Часов',
                      minutes: 'Минут',
                      seconds: 'Секунд'
                    },
                    style: 'font-family:\'Open Sans\'; font-size:14px; font-weight:400; color:#fff;'
                  },
                    style: {
                        element: "",
                        textResponsive: .7,
                        days: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        hours: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        minutes: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        seconds: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        }

                    },
                    onEndCallback: function() {
                        console.log("Time out!");
                    }
                });
                
                $('#countdown3').ClassyCountdown({
                    end: '440000',
                    now: '0',
                    labels: false,
                    labelsOptions: {
                    lang: {
                      days: 'Дней',
                      hours: 'Часов',
                      minutes: 'Минут',
                      seconds: 'Секунд'
                    },
                    style: 'font-family:\'Open Sans\'; font-size:14px; font-weight:400; color:#fff;'
                  },
                    style: {
                        element: "",
                        textResponsive: .7,
                        days: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        hours: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        minutes: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        },
                        seconds: {
                            gauge: {
                                thickness: .1,
                                bgColor: "rgba(0,0,0,0.05)",
                                fgColor: "#fff"
                            },
                            textCSS: 'font-family:\'Open Sans\'; font-size:28px; font-weight:600; color:#fff;'
                        }

                    },
                    onEndCallback: function() {
                        console.log("Time out!");
                    }
                });
            });
                                    