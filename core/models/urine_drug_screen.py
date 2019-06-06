from django.db import models
from core.models import ServiceEventData

class UrineDrugScreen(ServiceEventData):
    date_of_test = models.DateField()
    uds_temp = models.CharField(max_length=100, verbose_name="Urine Temperature")
    # TODO: does this belong here? if so, is it a Bool for if a PT was taken, or Bool for if pregnant?
    pregnancy_test = models.BooleanField(default=False)
    opiates = models.BooleanField(default=False)
    fentanyl = models.BooleanField(default=False)
    bup = models.BooleanField(default=False, verbose_name="Buprenorphine")
    coc = models.BooleanField(default=False, verbose_name="Cocaine")
    amp = models.BooleanField(default=False, verbose_name = "Amphetamine")
    m_amp = models.BooleanField(default=False, verbose_name = "Methamphetamine")
    thc = models.BooleanField(default=False, verbose_name = "THC")
    mtd = models.BooleanField(default=False, verbose_name = "Methadone")
    pcp = models.BooleanField(default=False, verbose_name = "PCP")
    bar = models.BooleanField(default=False, verbose_name = "Barbiturates")
    bzo = models.BooleanField(default=False, verbose_name = "Benzodiazepines")
    tca = models.BooleanField(default=False, verbose_name = "Tricyclic Antidepressants")
    oxy = models.BooleanField(default=False, verbose_name = "Oxycodone")

    def __str__(self):
        participant = self.service_event.visit.participant
        visit = self.service_event.visit

        if participant is not None:
            return 'UDS for %s (Visit %i)' % (participant.first_name, visit.id)
        else:
            return "UDS"
