
import { StyleSheet } from 'react-native';

export const additionalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF1FA',
  },

  backButton: {
    marginRight: 15,
  },

  headerTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#3561F5',
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#293653',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 13,
    color: '#8993AA',
    lineHeight: 20,
    marginBottom: 20,
  },

  searchBox: {
    height: 48,
    backgroundColor: '#EEF1FF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    color: '#293653',
  },

  doctorCard: {
    backgroundColor: '#EEF1FF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  doctorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#D6E0FF',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  avatarText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#3561F5',
  },

  doctorInfo: {
    flex: 1,
  },

  doctorName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3561F5',
  },

  specialty: {
    fontSize: 11,
    color: '#7F8AA5',
    marginTop: 5,
  },

  rating: {
    fontSize: 11,
    color: '#52628D',
    marginTop: 7,
  },

  divider: {
    height: 1,
    backgroundColor: '#DCE3FF',
    marginVertical: 15,
  },

  primaryButton: {
    height: 48,
    backgroundColor: '#3561F5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  primaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  secondaryButton: {
    height: 48,
    borderWidth: 1,
    borderColor: '#3561F5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  secondaryButtonText: {
    color: '#3561F5',
    fontSize: 14,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#293653',
    marginBottom: 14,
    marginTop: 15,
  },

  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#52628D',
    marginBottom: 7,
    marginTop: 13,
  },

  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#E0E6FF',
    backgroundColor: '#F8F9FF',
    borderRadius: 10,
    paddingHorizontal: 13,
    color: '#293653',
    fontSize: 13,
  },

  textArea: {
    height: 120,
    borderWidth: 1,
    borderColor: '#E0E6FF',
    backgroundColor: '#F8F9FF',
    borderRadius: 10,
    padding: 13,
    color: '#293653',
    fontSize: 13,
    textAlignVertical: 'top',
  },

  dateCard: {
    backgroundColor: '#EEF1FF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  dateRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  dateItem: {
    width: 65,
    height: 75,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeDate: {
    backgroundColor: '#3561F5',
  },

  dateDay: {
    fontSize: 11,
    color: '#8993AA',
  },

  dateNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3561F5',
    marginVertical: 4,
  },

  activeDateText: {
    color: '#FFFFFF',
  },

  timeSlot: {
    width: '47%',
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: '#DCE3FF',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  activeTimeSlot: {
    backgroundColor: '#3561F5',
    borderColor: '#3561F5',
  },

  timeText: {
    color: '#3561F5',
    fontSize: 12,
    fontWeight: '600',
  },

  activeTimeText: {
    color: '#FFFFFF',
  },

  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#DCE3FF',
    borderRadius: 12,
    marginBottom: 12,
  },

  activeOption: {
    borderColor: '#3561F5',
    backgroundColor: '#EEF1FF',
  },

  optionText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: '#293653',
    marginLeft: 12,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF1FA',
  },

  summaryLabel: {
    fontSize: 12,
    color: '#8993AA',
  },

  summaryValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#293653',
    maxWidth: '58%',
    textAlign: 'right',
  },

  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  successIcon: {
    width: 100,
    height: 100,
    borderRadius: 55,
    backgroundColor: '#E5EDFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  successTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3561F5',
    textAlign: 'center',
  },

  successText: {
    fontSize: 13,
    color: '#8993AA',
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 12,
  },
});
